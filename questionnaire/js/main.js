$(function() {
  //textをコピー
  var copyText = function(){
    //texを取得
    var name = $("name").val();

    //textを設定
    $("#name2").val(name);
  }; // end of var copyText 

  //Copy checkbox
  var copyCheckbox = function(){
    //チェックされているかを取得
    car chck = $(#chck).prop("checked");

    //setting up the check
    $("#chck2").prop("checked", chck);

    // on/off 関係なく値を得る
    var chckVal = $("#chck").val();

    // コンソールに出力
    console.log("checkbox", chck, chckVal);

  };

    // チェック済みチェックボックスの値を出力
  var dumpCheckbox = function() {
    $("input[type=checkbox]:checked").each(function() {
      // idを得る
      var id = $(this).attr("id");

      // on/off 関係なく値を得る
      var chckVal = $(this).val();

      // コンソールに出力
      console.log("dump checkbox", id, chckVal);
    });
  };

  // ラジオボタンをコピー
  var copyRadio = function() {
    // チェックされている値を取得
    var gender = $("input[name=gender]:checked").val();

    // チェックを反映
    $("input[name=gender2]").val([gender]);

    // コンソールに出力
    console.log("radio", gender);
  };

  // セレクトをコピー
  var copySelect = function() {
    // 選択されている値を取得
    var lsts = $("#lst").val();

    // 選択を反映
    $("#lst2").val(lsts);

    // コンソールに出力
    console.log("select", lsts);
  };

  // テキスト エリアをコピー
  var copyText = function() {
    // テキストを取得
    var free = $("#free").val();

    // テキストを設定
    $("#free2").val(free);

    // コンソールに出力
    console.log("textarea", free);
  };

  // 全てをコピー
  var copyAll = function() {
    console.log("--------------------");
    copyText();   // テキストをコピー
    dumpCheckbox(); // チェック済みチェックボックスの値を出力
    copyCheckbox(); // チェックボックスをコピー
    copyRadio();  // ラジオボタンをコピー
    copySelect(); // セレクトをコピー
  };

  // ［Copy］ボタンにイベントを登録
  $("#btnCopy").click(copyAll);



  // 入力が空か確認
  var checkBlank = function() {
    // 入力欄が空か確認
    if ($("#name").val() == "") {
      alert("［Name] is empty");
      return true;
    }
    if ($("#free").val() == "") {
      alert("［Message] is empty.");
      return true;
    }

    // ラジオボタンが選択されていないか確認
    if ($("input[name=gender]:checked").val() === undefined) {
      alert("Please select [Gender]");
      return true;
    }

    // セレクトが選択されていないか確認
    if ($("#lst").val() === null) {
      alert("Please select [Select]");
      return true;
    }

    // 問題なし
    return false;
  };

  // ［Submit］ボタンにイベントを登録
  $("#f").submit(function() {
    var isBlank = checkBlank();
    if (isBlank) {
      console.log("stop");
      return false;
    }
  });
});

})
