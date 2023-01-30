

var $progressValue = 0;
var resultList=[];

var allresult = [];
const quizdata=[
      {
        question:"1.सबसे पहली क्रिप्टोकर्रेंसी का नाम क्या है? ",
        options:[ "लाइटकॉइन","बिटकॉइन", "इथेरियम", "ट्रोन"],
        answer:"बिटकॉइन",
        category:2
      },
      {
        question:"2. बिटकॉइन की शुरुआत कब हुई ?",
        options:["2018", "2004", "1999", "2009"],
        answer:"2009",
        category:4
      },
      {
        question:"3. बिटकॉइन की  शुरुआती कीमत  कितनी थी ?",
        options:[ " 2546 डॉलर", "1 डॉलर से कम", "15 डॉलर ", "150 डॉलर"],
        answer:"1 डॉलर से कम",
        category:2
      },
      {
        question:"4. अब तक बिटकॉइन अधिकतम कीमत कितनी रही है ?",
        options:["62159 डॉलर", "56785 डॉलर", "72568 डॉलर" , "68789 डॉलर"],
        answer:"68789 डॉलर",
        category:4
      },
      {
        question:"5. ब्लॉकचैन टेक्नोलॉजी को अन्य किस नाम से जानते है ?",
        options:["सर्वरलेस लैजर टेक्नोलॉजी","डीसेंट्रलाईज्ड लैजर टेक्नोलॉजी", "हैशडाटा लैजर टेक्नोलॉजी",  "सेंट्रलाईज्ड लैजर टेक्नोलॉजी"],
        answer:"डीसेंट्रलाईज्ड लैजर टेक्नोलॉजी",
        category:2
      },
      {
        question:"6. LEXEACH किस ब्लॉकचैन पर आधारित है ?",
        options:["Binance smart chain", "Ethereum", "Tron", "Solana"],
        answer:"Binance smart chain",
        category:1
      },
      {
        question:"7. LEXEACH टोकन के कितने डेसीमल प्लेस हैं ?",
        options:[ "15", "18", "9","21"],
        answer:"18",
        category:2
      },
      {
        question:"8. LEAXEACH डायरेक्ट स्पांसर इनकम कितनी मिलती है ?",
        options:["25%", "15 %", "10%", "20%"],
        answer:"20%",
        category:4
      },
      {
        question:"9. LEXEACH लेवल इनकम कितनी मिलती है ?",
        options:["2%","1%", "0.5%", "4%"],
        answer:"1%",
        category:2
      },
      {
        question:"10. LEXEACH लेवल इनकम कितने लेवल तक मिलती है ?",
        options:["7", "10", "5", "9"],
        answer:"10",
        category:2
      },
      {
        question:"11. LEXEACH ऑटोफिल मैट्रिक्स की संरचना क्या ?",
        options:[ "4*5", "5*4","4*4", "3*5"],
        answer:"4*5",
        category:1
      },
      {
        question:"12. LEXEACH ऑटोफिल मैट्रिक्स में कितने लेवल तक बिना शर्त आय प्राप्त होती है ?",
        options:["5", "1", "2", "3"],
        answer:"3",
        category:4
      },
      {
        question:"13. ऑटोफिल मैट्रिक्स में तीसरे  लेवल के बाद अन्य लेवल की आय प्राप्त करने के लिए क्या शर्त है ?",
        options:[ "2 Sponsor","4 Sponsor", "1 Sponsor", "3 Sponsor"],
        answer:"2 Sponsor",
        category:1
      },
      {
        question:"14. सब-एडमिन की स्टेज वन इनकम कितनी प्राप्त होती  है ?",
        options:["15%", "10%", "20%", "25%"],
        answer:"20%",
        category:3
      },
      {
        question:"15. सब-एडमिन की स्टेज इनकम कितने स्टेज तक प्राप्त होती है ?",
        options:[ "10 स्टेज", "5 स्टेज", "15 स्टेज", "20 स्टेज"],
        answer:"10 स्टेज",
        category:1
      },
      {
        question:"16. सब-एडमिन को  स्टेज 2 से 10 तक प्रत्येक स्टेज पर  कितनी आय प्राप्त होती है ?",
        options:["1%","2%", "0.5%", "4%"],
        answer:"2%",
        category:2
      },
      {
        question:"17. ब्लॉकचैन में गैस फीस  क्या होती है ?",
        options:["वॉलेट का भुगतान","स्मार्ट कॉन्ट्रैक्ट का भुगतान ", "नोड अथवा माइनर का भुगतान",  "सर्वर का भुगतान"],
        answer:"नोड अथवा माइनर का भुगतान",
        category:3
      },
      {
        question:"18. LEXEACH में गैस फीस किस कॉइन में जाती है ?",
        options:["BNB", "ETH", "LXC", "TRX"],
        answer:"BNB",
        category:1
      },
      {
        question:"19. LEXEACH में रजिस्ट्रेशन करने के किये कौन सा कॉइन डोनेट करना होता है ?",
        options:[ "USDC", "USDD", "USDT","USCC"],
        answer:"USDT",
        category:3
      },
      {
        question:"20. स्मार्ट कॉन्ट्रैक्ट पर LXC  की कीमत बढ़ने की दर क्या है ?",
        options:["समूह का आकार 4 गुना होने पर 3 गुना", "समूह का आकार 3 गुना होने पर 2 गुना", "समूह का आकार 6 गुना होने पर 4 गुना", "समूह का आकार 4 गुना होने पर 2 गुना"],
        answer:"समूह का आकार 4 गुना होने पर 2 गुना",
        category:4
      },
      {
        question:"21. स्मार्ट कॉन्ट्रैक्ट पर रजिस्ट्रेशन फीस बढ़ने की दर क्या है ?",
        options:["समूह का आकार 4 गुना होने पर 10%","समूह का आकार 10 गुना होने पर 10%", "समूह का आकार 5 गुना होने पर 10%", "समूह का आकार 10 गुना होने पर 5%"],
        answer:"समूह का आकार 10 गुना होने पर 10%",
        category:2
      },
      {
        question:"22. रजिस्ट्रेशन के समय मिला हुआ LXE टोकन कब तक फ्रीज़/लॉक्ड रहता है ?",
        options:["ऑटोफिल की 65वी आय प्राप्त होने तक", "ऑटोफिल की 50वी आय प्राप्त होने तक", "ऑटोफिल की 45वी आय प्राप्त होने तक", "ऑटोफिल की 75वी आय प्राप्त होने तक"],
        answer:"ऑटोफिल की 65वी आय प्राप्त होने तक",
        category:1
      },
      {
        question:"23. नेटवर्क मार्केटिंग की खूबसूरती क्या है ?",
        options:[ "अपने काम के साथ दूसरे के किये काम से भी आय प्राप्त होती है", "छोटी लागत लगा के बड़ी आय प्राप्त की जा सकती है","कार्य करने का समय अपनी सुविधा अनुसार तय कर सकते हैं।", "उपरोक्त सभी कथन सही हैं"],
        answer:"उपरोक्त सभी कथन सही हैं",
        category:4
      },
      {
        question:"24. पब्लिक की अथवा वॉलेट एड्रेस क्या है ?",
        options:["पब्लिक से प्राप्त गुप्त कोड", "ब्लॉकचैन से प्राप्त एक तरह का खाता नंबर", "स्मार्ट कॉन्ट्रैक्ट का रजिस्ट्रेशन नंबर", "जिस घर पर वॉलेट बनाते है उसका पता"],
        answer:"ब्लॉकचैन से प्राप्त एक तरह का खाता नंबर",
        category:2
      },
      {
        question:"25. प्राइवेट की क्या है ?",
        options:["प्राइवेटली  खरीदी गई  की/एड्रेस", "प्राइवेट ट्रांजैक्शन करने के लिए कोड", "पब्लिक की  / वॉलेट एड्रेस का पासवर्ड", "ब्लॉकचैन पर प्राइवेट अकाउंट नंबर"],
        answer:"पब्लिक की  / वॉलेट एड्रेस का पासवर्ड",
        category:3
      },
      {
        question:"26. प्राइवेट की को क्यों सुरक्षित रखना चाहिए ?",
        options:["क्योंकि प्राइवेट की  को बहुत अधिक महंगा खरीदा होता है", "क्योंकि प्राइवेट की  से हमारी निजी जानकारी जुडी होती है", "क्योंकि प्राइवेट की  से हमारा क्रिप्टो एक्सचेंज जुड़ा होता है", "क्योंकि प्राइवेट की  को दोबारा प्राप्त/रिकवर नहीं किया जा सकता"],
        answer:"क्योंकि प्राइवेट की  को दोबारा प्राप्त/रिकवर नहीं किया जा सकता",
        category:4
      },
      {
        question:"27. प्राइवेट की खो जाने पर क्या करना चाहिए ?",
        options:["ब्लॉकचैन नोड को सूचित करना चाहिए", "ब्लॉकचैन के कस्टमर केयर में बात करनी चाहिए", "प्राइवेट की खो जाने पर कोई भी समाधान नहीं है", "अपने वॉलेट को रिसेट करना चाहिए "],
        answer:"प्राइवेट की खो जाने पर कोई भी समाधान नहीं है",
        category:3
      },
      {
        question:"28. ब्लॉकचैन पर डाटा सुरक्षित रहता है क्योंकि डाटा...",
        options:["एक सर्वर में होने की बजाय अनेक नोड के पास स्टोर होता है", " की सुरक्षा के लिए कई सारे एंटीवायरस की मदद ली जाती है", " जिस डाटासेण्टर में  होता है उसकी कड़ी सुरक्षा होती है", " विशेष प्रकार की हार्ड डिस्क में स्टोर किया जाता है"],
        answer:"एक सर्वर में होने की बजाय अनेक नोड के पास स्टोर होता है",
        category:1
      },
      {
        question:"29. ट्रांजेक्शन हैश क्या होता है ?",
        options:["किसी भी सूचना को हैशटैग करने वाला ट्रांसक्शन", " एक बड़े डाटा को छोटी तालिकाओं में मैप करने की एक तकनीक है", "एक कोड  है, जो इस बात का प्रमाण होता है कि लेन-देन  किया गया था", "उपरोक्त में कोई भी नहीं"],
        answer:"एक कोड  है, जो इस बात का प्रमाण होता है कि लेन-देन  किया गया था",
        category:3
      },
      {
        question:"30. ट्रांजेक्शन हैश से सम्बंधित लेंन-देंन अथवा डाटा की  कहाँ से पुष्टि की जा सकती है ?",
        options:["किसी ऐसे व्यक्ति /संस्था से  से जो डाटा स्टोरेज की  सेवाएं देता हो", "सम्बंधित ब्लॉकचैन के एक्स्प्लोरर की वेबसाइट पर जा कर", "वॉलेट की ट्रांसक्शन हिस्ट्री में देख कर", "कॉइनमार्किटकैप की वेबसाइट में सर्च कर के"],
        answer:"सम्बंधित ब्लॉकचैन के एक्स्प्लोरर की वेबसाइट पर जा कर",
        category:2
      },
    ];

    // [2,4,2,4,2,1,2,4,2,2,1,4,1,3,1,2,3,1,3,4,2,1,3,2,3,4,3,1,3,2]

/** Random shuffle questions **/
function shuffleArray(question){
   var shuffled=question.sort(function() {
    return .5 - Math.random();
 });
   return shuffled;
}

function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var _ref = [a[j], a[i - 1]];
    a[i - 1] = _ref[0];
    a[j] = _ref[1];
  }
}

/*** Return shuffled question ***/
function generateQuestions(){
  var questions=quizdata;    
  return questions;
}

/*** Return list of options ***/
function returnOptionList(opts, i){

  var optionHtml='<li class="myoptions">'+
    '<input value="'+opts+'" name="optRdBtn" type="radio" id="rd_'+i+'">'+
    '<label for="rd_'+i+'">'+opts+'</label>'+
    '<div class="bullet">'+
      '<div class="line zero"></div>'+
      '<div class="line one"></div>'+
      '<div class="line two"></div>'+
      '<div class="line three"></div>'+
      '<div class="line four"></div>'+
      '<div class="line five"></div>'+
      '<div class="line six"></div>'+
      '<div class="line seven"></div>'+
      
    '</div>'+
  '</li>';

  return optionHtml;
}

/** Render Options **/
function renderOptions(optionList){
  var ulContainer=$('<ul>').attr('id','optionList');
  for (var i = 0, len = optionList.length; i < len; i++) {
    var optionContainer=returnOptionList(optionList[i], i)
    ulContainer.append(optionContainer);
  }
  $(".answerOptions").html('').append(ulContainer);
}

/** Render question **/
function renderQuestion(question){
  $(".question").html("<h1>"+question+"</h1>");
}

/** Render quiz :: Question and option **/
function renderQuiz(questions, index){ 
  var currentQuest=questions[index];  
  renderQuestion(currentQuest.question); 
  renderOptions(currentQuest.options); 
  console.log("Question");
  console.log(questions[index]);
}

/** Return correct answer of a question ***/
function getCorrectAnswer(questions, index){
  return questions[index].answer;
}

/** pushanswers in array **/
function correctAnswerArray(resultByCat){
  var arrayForChart=[];
  for(var i=0; i<resultByCat.length;i++){
   arrayForChart.push(resultByCat[i].correctanswer);
  }

  return arrayForChart;
}
/** Generate array for percentage calculation **/
function genResultArray(results, wrong){
  var resultByCat = resultByCategory(results);
  var arrayForChart=correctAnswerArray(resultByCat);
  arrayForChart.push(wrong);
  return arrayForChart
}

/** percentage Calculation **/
function percentCalculation(array, total){
  var percent = array.map(function (d, i) {
    return (100 * d / total).toFixed(2);
  });
  return percent;
}

/*** Get percentage for chart **/
function getPercentage(resultByCat, wrong){
  var totalNumber=resultList.length;
  var wrongAnwer=wrong;
  var arrayForChart=genResultArray(resultByCat, wrong);
  return percentCalculation(arrayForChart, totalNumber);
}

/** count right and wrong answer number **/
function countAnswers(results){

  var countCorrect=0, countWrong=0;

  for(var i=0;i<results.length;i++){
    if(results[i].iscorrect==true)  
        countCorrect++;
    else countWrong++;
  }

  return [countCorrect, countWrong];
}

/**** Categorize result *****/
function resultByCategory(results){

  var categoryCount = [];
  var ctArray=results.reduce(function (res, value) {
    if (!res[value.category]) {
        res[value.category] = {
            category: value.category,
            correctanswer: 0           
        };
        categoryCount.push(res[value.category])
    }
    var val=(value.iscorrect==true)?1:0;
    res[value.category].correctanswer += val; 
    return res;
  }, {});

  categoryCount.sort(function(a,b) {
    return a.category - b.category;
  });

  return categoryCount;
}


/** Total score pie chart**/
function totalPieChart(_upto, _cir_progress_id, _correct, _incorrect) {

   $("#"+_cir_progress_id).find("._text_incor").html("Incorrect : "+_incorrect);
   $("#"+_cir_progress_id).find("._text_cor").html("Correct : "+_correct);

   var unchnagedPer=_upto;
   
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    var _progress = 0;

    var _cir_progress = $("#"+_cir_progress_id).find("._cir_P_y");
    var _text_percentage = $("#"+_cir_progress_id).find("._cir_Per");

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {
      //2*pi*r == 753.6 +xxx=764
        _input_percentage = (_upto / 100) * 764;
        _percentage = (_progress / 100) * 764;

        _text_percentage.html(_progress + '%');

        if(unchnagedPer >= 50){
             $("#qualify").show();
        }else{
            $("#unqualify").show();
        }

        if (_percentage >= _input_percentage) {
             _text_percentage.html('<tspan x="50%" dy="0em">'+unchnagedPer + '% </tspan><tspan  x="50%" dy="1.9em">Your Score</tspan>');
            clearInterval(_sleep);
        } else {

            _progress++;

            _cir_progress.attr("stroke-dasharray",_percentage + ',764');
        }
    }
}

function renderBriefChart(correct, total, incorrect){
  var percent=(100 * correct / total);
  if(Math.round(percent) !== percent) {
          percent = percent.toFixed(2);
  }

 totalPieChart(percent, '_cir_progress', correct, incorrect)
   
}
/*** render chart for result **/
function renderChart(data){
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [ "Verbal communication", 
              "Non-verbal communication", 
              "Written communication", 
              "Incorrect"
            ],
    datasets: [
                {
                 
                  data: data,
                  backgroundColor: [  '#e6ded4',
                                      '#968089',
                                      '#e3c3d4',
                                      '#ab4e6b'
                                    ],
                  borderColor: [  'rgba(239, 239, 81, 1)',
                                  '#8e3407',
                                  'rgba((239, 239, 81, 1)',
                                  '#000000'
                                ],
                  borderWidth: 1
                }
              ]
    },
    options: {
         pieceLabel: {
          render: 'percentage',
          fontColor: 'black',
          precision: 2
        }
      }
    
  });
}

/** List question and your answer and correct answer  

*****/
function getAllAnswer(results){
    var innerhtml="";
    for(var i=0;i<results.length;i++){

      var _class=((results[i].iscorrect)?"item-correct":"item-incorrect");
       var _classH=((results[i].iscorrect)?"h-correct":"h-incorrect");
      

      var _html='<div class="_resultboard '+_class+'">'+
                  '<div class="_header">'+results[i].question+'</div>'+
                  '<div class="_yourans '+_classH+'">'+results[i].clicked+'</div>';

        var html="";
       if(!results[i].iscorrect)
      '</div>';
       _html=(_html+html)+'</div>';
       innerhtml+=_html;
    }

  $(".allAnswerBox").html('').append(innerhtml);
}
/** render  Brief Result **/
function renderResult(resultList){ 
  
  var results=resultList;
  console.log(results);
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];

  console.log("coreect one" , countCorrect);
  console.log("wrong one" , countWrong);
  
  
  renderBriefChart(countCorrect, resultList.length, countWrong);
}

function renderChartResult(){
   var results=resultList; 
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];
  var dataForChart=genResultArray(resultList, countWrong);
  renderChart(dataForChart);
}

/** Insert progress bar in html **/
function getProgressindicator(length){
  var progressbarhtml=" ";
  for(var i=0;i<length;i++){
    progressbarhtml+='<div class="my-progress-indicator progress_'+(i+1)+' '+((i==0)?"active":"")+'"></div>';
  }
  $(progressbarhtml).insertAfter(".my-progress-bar");
} 

/*** change progress bar when next button is clicked ***/
function changeProgressValue(){
  $progressValue+= 4;
  if ($progressValue >= 100) {
    
  } else {
    if($progressValue==99) $progressValue=100;
    $('.my-progress')
      .find('.my-progress-indicator.active')
      .next('.my-progress-indicator')
      .addClass('active');      
    $('progress').val($progressValue);
  }
  $('.js-my-progress-completion').html($('progress').val() + '% complete');

}   
function addClickedAnswerToResult(questions,presentIndex,clicked ){
  var correct=getCorrectAnswer(questions, presentIndex);
    var result={
      index:presentIndex,
      question:questions[presentIndex].question, 
      clicked:clicked,
      iscorrect:(clicked==correct)?true:false,
      answer:correct, 
      category:questions[presentIndex].category
    }
    resultList.push(result);

    console.log("result");
    console.log(result);
      
}

$(document).ready(function() {
  
  var presentIndex=0;
   var clicked=0;

  var questions=generateQuestions();
  renderQuiz(questions, presentIndex);
  getProgressindicator(questions.length);

  $(".answerOptions ").on('click','.myoptions>input', function(e){
    clicked=$(this).val();   
    // console.log("index no of array ," )
    if(questions.length==(presentIndex+1)){
      $("#submit").removeClass('hidden');
      $("#next").addClass("hidden");
    }
    else{

      $("#next").removeClass("hidden");
    }

     
  
  });



  $("#next").on('click',function(e){
    e.preventDefault();
    addClickedAnswerToResult(questions,presentIndex,clicked);
    var type =  questions[presentIndex].options;
     for(var i = 0 ; i<= type.length ; i++){
       if( type[i]== clicked){
        var no =i+1;
        allresult.push(no);
       }
     }
    

    $(this).addClass("hidden");
    
    presentIndex++;
    renderQuiz(questions, presentIndex);
    changeProgressValue();
  });

  $("#submit").on('click', async function(e){
     addClickedAnswerToResult(questions,presentIndex,clicked);
   
    renderResult(resultList);
    console.log("rrrrr",resultList);
    console.log("clicked" , clicked);
    console.log("presendind" ,presentIndex)
    console.log(allresult.length);
    // loading
    $('#loading').show();

    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"address","name":"_student","type":"address"}],"name":"isQualified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"passMarks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_qMarks","type":"uint256"}],"name":"qualifyingMarks","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256[]","name":"questions","type":"uint256[]"},{"internalType":"uint256[]","name":"corr_choices","type":"uint256[]"}],"name":"setQuestion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256[]","name":"setQuest","type":"uint256[]"},{"internalType":"uint256[]","name":"answer","type":"uint256[]"}],"name":"subAnswer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalQuestions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalQulifiedUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user","outputs":[{"internalType":"uint256","name":"obtainMarks","type":"uint256"},{"internalType":"uint256","name":"lastAttain","type":"uint256"},{"internalType":"uint256","name":"totalMarks","type":"uint256"},{"internalType":"string","name":"status","type":"string"},{"internalType":"uint256","name":"percentage","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
    var contract_address= '0x70a14a2F04B24b4ef66d223eb6826dF52Caf17cE'; 



    var instance = new web3.eth.Contract(
      abi,
      contract_address
    );
     var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29] ;
     console.log(allresult.length);
     console.log(a.length);
    await instance.methods.subAnswer(a ,  allresult)
      .send({from : accounts[0]})
      .then(()=>{
        $('.multipleChoiceQues').hide();
        $('#loading').hide();
         $(".resultArea").show();
        renderResult(resultList);
      })
  });

  
  

   $(".resultArea").on('click','.viewchart',function(){
      $(".resultPage2").show();
       $(".resultPage1").hide();
       $(".resultPage3").hide();
       renderChartResult();
   });

    $(".resultArea").on('click','.backBtn',function(){
      $(".resultPage1").show();
       $(".resultPage2").hide();
       $(".resultPage3").hide();
        renderResult(resultList);
   });

    $(".resultArea").on('click','.viewanswer',function(){
      $(".resultPage3").show();
       $(".resultPage2").hide();
       $(".resultPage1").hide();
        getAllAnswer(resultList);
        console.log("resultList" , resultList);
   });

  $(".resultArea").on('click','.replay',function(){
    window.location.reload(true);
  });

});