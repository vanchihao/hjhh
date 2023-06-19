
function js_body(){
    
}

// code tìm kiếm trong thanh search

function search(){
    let tatcaphim = document.getElementById('tatcaphim');
    tatcaphim.style.display = "block";
    let nhap = document.querySelector('#nhap');
    let h2 = document.getElementById("h2");
    let thongtin = Array.from(document.querySelectorAll('#thongtin'));
    let viethoa = nhap.value.toUpperCase().trim();
    let bocach = nhap.value.toUpperCase().replace(/\s/g,'');
    if(viethoa != "")
        h2.innerHTML = "Tìm phim";
    else
        h2.innerHTML = "tất cả phim";
    thongtin.forEach(function(tt){
        let text =  tt.innerText;
        let text2 = tt.innerText.replace(/\s/g,'');
        if(text.search(viethoa)>-1 || text.search(bocach)>-1 || text2.search(bocach)>-1){
            tt.style.display ="block";
            }
        else
            tt.style.display = "none";      
    })
}

// code tìm kiếm trong select
function chon(){
    let chon = document.getElementById("chon");
    let h2 = document.getElementById("h2");
    let phimsapchieu = document.getElementById("phimsapchieu");
    let tatcaphim = document.getElementById("tatcaphim");
    let thongtin = Array.from(document.querySelectorAll('#thongtin'));
    let chonxem = chon.value;
    h2.style.display = "block";
        if(chonxem.search("Phim sắp chiếu")>-1){
            phimsapchieu.style.display = "block";
            tatcaphim.style.display = "none";
            thongtin.forEach(function(tt){
                let text =  tt.innerText;
                if(text.search(" ")>-1){
                    h2.innerHTML = "Phim sắp chiếu";
                    h2.style.backgroundColor = "red";
                    tt.style.display ="block";}
                else
                    tt.style.display = "none";           
            })
        }
        else if(chonxem.search("Tất cả phim")>-1){
            tatcaphim.style.display = "block";
            thongtin.forEach(function(tt){
                let text =  tt.innerText;
                if(text.search(" ")>-1){
                    h2.innerHTML = "Tất cả phim";
                    tt.style.display ="block";}
                else
                    tt.style.display = "none";           
            })
        }
        else if(chonxem.search("Anh")>-1 || chonxem.search("Mỹ")>-1 || chonxem.search("Việt Nam")>-1 
        || chonxem.search("Hàn Quốc")>-1 || chonxem.search("Trung Quốc")>-1 || chonxem.search("Nhật Bản")>-1){
            tatcaphim.style.display = "block";
            if(chonxem.search("Anh")>-1){
                h2.innerHTML = "Phim Anh";
                thongtin.forEach(function(tt){
                let text =  tt.innerText;
                if(text.search("Quốc gia: "+ chonxem)>-1){
                    tt.style.display ="block";}
                else
                    tt.style.display = "none";           
                });
            }
            else if(chonxem.search("Mỹ")>-1){
                h2.innerHTML = "Phim Mỹ";
                thongtin.forEach(function(tt){
                let text =  tt.innerText;
                if(text.search("Quốc gia: "+ chonxem)>-1){
                    tt.style.display ="block";}
                else
                    tt.style.display = "none";           
                });
            }
            else if(chonxem.search("Việt Nam")>-1){
                h2.innerHTML = "Phim Việt Nam";
                thongtin.forEach(function(tt){
                let text =  tt.innerText;
                if(text.search("Quốc gia: "+ chonxem)>-1){
                    tt.style.display ="block";}
                else
                    tt.style.display = "none";           
                });
            }
            else if(chonxem.search("Hàn Quốc")>-1){
                h2.innerHTML = "Phim Hàn Quốc";
                thongtin.forEach(function(tt){
                    let text =  tt.innerText;
                    if(text.search("Quốc gia: "+ chonxem)>-1){
                        tt.style.display ="block";}
                    else
                        tt.style.display = "none";           
                });
            }
            else if(chonxem.search("Nhật Bản")>-1){
                h2.innerHTML = "Phim Nhật Bản";
                thongtin.forEach(function(tt){
                    let text =  tt.innerText;
                    if(text.search("Quốc gia: "+ chonxem)>-1){
                        
                        tt.style.display ="block";}
                    else
                        tt.style.display = "none";           
                });
            }
            else if(chonxem.search("Trung Quốc")>-1){
                 h2.innerHTML = "Phim Trung Quốc";
                thongtin.forEach(function(tt){
                    let text =  tt.innerText;
                    if(text.search("Quốc gia: "+ chonxem)>-1){
                        tt.style.display ="block";}
                    else
                        tt.style.display = "none";           
                });
            }
        }
    
}

// code mo xem them

var xemthem = 1000;
function tang_height(){
    xemthem += 1000;
}
function giam_height(){
    xemthem -= 1000;
}
function them(a){
    let main = document.getElementById("main");
    let them = document.getElementById("btn_them");
    let an = document.getElementById("btn_an");
    if(a==1 && xemthem < 10000){
        tang_height();
        main.style.height = xemthem + "px";
        them.style.background = "red";
        an.style.background = "green";
        }
    else if(a==2 && xemthem > 1000){
        giam_height();
        main.style.height = xemthem + "px";
        them.style.background = "green";
        an.style.background = "red";
    }
}