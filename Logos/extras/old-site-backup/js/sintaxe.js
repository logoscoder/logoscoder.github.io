
var log = function (a) {console.log(a);}

$(document).ready(function(){
  log('LPL Documentation - loaded!')
})

$(document).ready(function(){
  $('.code').each(function(index, obj){
    var code = $(this).html(), newCode = '';
    var strflag = false;
    
    for (var a=0; a<code.length; a++) {
      switch (code[a]) {
        case '=': case '.': case '+': case '-': case '/': case '*': case '%':
        case '[': case ']': case ',':
          newCode += charcolor('#f92672', code[a]); break;
        
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': 
          newCode += charcolor('#f29fe4', code[a]); break;
          
        case '\'':
          if (strflag == false) {
            strflag = true;
            newCode += '<font style="color:#e6db74;">\'';
          } else {
            strflag = false;
            newCode += '\'</font>';
          }
          break;
          
        default:
          newCode += code[a];
      }
    }
    
    newCode = newCode.replace(/def/g, '<font style="color:#66d9ef;">def</font>')
    newCode = newCode.replace(/class/g, '<font style="color:#66d9ef;">class</font>')
    newCode = newCode.replace(/end/g, '<font style="color:#66d9ef;">end</font>')
    newCode = newCode.replace(/if/g, '<font style="color:#66d9ef;">if</font>')
    newCode = newCode.replace(/el/g, '<font style="color:#66d9ef;">el</font>')
    newCode = newCode.replace(/for/g, '<font style="color:#66d9ef;">for</font>')
    newCode = newCode.replace(/require/g, '<font style="color:#66d9ef;">require</font>')
    newCode = newCode.replace(/new/g, '<font style="color:#66d9ef;">new</font>')
    newCode = newCode.replace(/this/g, '<font style="color:#66d9ef;">this</font>')
    newCode = newCode.replace(/__/g, '<font style="color:#66d9ef;">__</font>')
    newCode = newCode.replace(/inline/g, '<font style="color:#66d9ef;">inline</font>')
    
    $(this).html( newCode )
  })
})

function charcolor (color, character) {
  return '<font style="color:'+ color +';">'+ character +'</font>';
}
