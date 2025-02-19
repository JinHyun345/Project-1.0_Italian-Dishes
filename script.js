
            var Body = {
                setBackColor: function(color){
                    document.querySelector('body').style.backgroundColor = color;
                },
                setColor: function(color){
                    var bodylist = document.querySelectorAll('body');
                    var i = 0;
                    while(i < bodylist.length){
                        bodylist[i].style.color = color;
                        i = i + 1;
                    }
                }
            }
            var top = {
                setColor: function(color){
                    var toplist = document.querySelectorAll('.top a');
                    var i = 0;
                    while(i < toplist.length){
                        toplist[i].style.color = color;
                        i = i + 1;
                    }
                }
            }
            var menu = {
                setBackColor: function(color){
                    var menulist = document.querySelectorAll('.menu a');
                    var i = 0;
                    while(i < menulist.length){
                        menulist[i].style.backgroundColor = color;
                        i = i + 1;
                    }
                }
            }
            var link = {
                setColor: function(color){
                    document.querySelector('.link').style.color = color;
                }
            }
            var home = {
                setColor: function(color){
                    document.querySelector('.home a').style.color = color;
                    document.querySelector('.home').style.borderColor = color;
                    document.querySelector('.top').style.borderColor = color;
                }
            }
            function themeChange(self){
                if(document.querySelector('.theme').value === 'WHITE'){
                            Body.setBackColor('black')
                            Body.setColor('white')
                            menu.setBackColor('violet')
                            link.setColor('yellow')
                            home.setColor('white')
                            self.style.backgroundColor = 'white';
                            self.value = 'BLACK';
                        }
                        else if(document.querySelector('.theme').value === 'BLACK'){
                            Body.setBackColor('antiquewhite')
                            Body.setColor('saddlebrown')
                            menu.setBackColor('white')
                            link.setColor('royalblue')
                            home.setColor('saddlebrown')
                            self.style.backgroundColor = 'burlywood';
                            self.value = 'BEIGE';
                        }
                        else {
                            Body.setBackColor('white')
                            Body.setColor('black')
                            menu.setBackColor('green')
                            link.setColor('red')
                            home.setColor('black')
                            self.style.backgroundColor = 'lightgray';
                            self.value = 'WHITE';
                        }
            }
