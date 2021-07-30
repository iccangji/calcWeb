var input = document.getElementById('kolom'); //isi kolom input
    
//Operasi
        document.getElementById('tambah').addEventListener('click',function(){
            for(var i=0;i<10;i++){
                if(input.value.charAt(input.value.length-1) == i &&
                input.value!=''){
                    input.value+='+';
                }
            }
        })
        document.getElementById('kurang').addEventListener('click',function(){
            for(var i=0;i<10;i++){
                if(input.value.charAt(input.value.length-1) == i &&
                input.value!=''){
                    input.value+='-';
                }
            }
        })
        document.getElementById('kali').addEventListener('click',function(){
            for(var i=0;i<10;i++){
                if(input.value.charAt(input.value.length-1) == i &&
                input.value!=''){
                    input.value+='*';
                }
            }
        })
        document.getElementById('bagi').addEventListener('click',function(){
            for(var i=0;i<10;i++){
                if(input.value.charAt(input.value.length-1) == i &&
                input.value!=''){
                    input.value+='/';
                }
            }
        })

//desimal
        document.getElementById('titik').addEventListener('click',function(){
            var a = input.value.lastIndexOf('.');
            var b = input.value.lastIndexOf('+');
            var c = input.value.lastIndexOf('-');
            var d = input.value.lastIndexOf('*');
            var e = input.value.lastIndexOf('/');
            for(var i=0;i<10;i++){
                if(input.value.charAt(input.value.length-1) == i && input.value!=''){
                    if(a<0){
                        input.value+='.'
                    }
                    else{
                        if(b>0||c>0||d>0||e>0){
                            if(a<b||a<c||a<d||a<e){
                                input.value+='.'
                            }
                        }
                    }
                }
            }
        })

//hapus karakter
        document.getElementById('del').addEventListener('click',function(){
            input.value = input.value.slice(0,input.value.length-1);
        })
//kalkulasi
    function main(){
        var output = eval(input.value);
        input.value = output;
    }