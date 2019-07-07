document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var username = this.username.value;
    var password = this.password.value;
    ajax({
      url: '/login',
      type: 'post',
      data: { username, password }
    }).then(res => {
      console.log(res);
      alert(res.message);
      if (res.code == 200) {
        location = '/';
      }
    });
  });
  
  var xhr=new XMLDocument();
  xhr.open('get',)
  xhr.send()
  