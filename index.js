document.getElementById('input_q').addEventListener('click', function(){
    const search_input = document.getElementById('input_q').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: 'message_sent' }, function (text) {
            var res = do_calcs(search_input, text);
            var result1 = document.getElementById('c1_res');
            var result2 = document.getElementById('c2_res');
            var result3 = document.getElementById('c3_res');
            result1.innerHTML=res[0]
            result2.innerHTML=res[1]
            result3.innerHTML = res[2]
            console.log(res[0])
            console.log(res[1])
            console.log(res[2])
        });
    });
    });

function do_calcs(search_input, text){
    var javaString = "document"; 
    const stringSize= javaString.length();
    res = ["","",""]
    if (!text){
        res = ["None", "None", "None"];
    }else{
        doclength = text.length();
        var j = 0;
        for (var i = 0; i<doclength;i++){
            if (text[i]== search_input){
                j++;
                res[j]== text[i]}
        }

    }
}








