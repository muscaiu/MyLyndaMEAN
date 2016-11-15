export class MainController {
  constructor ($scope, $http) {
    'ngInject';

    this.$http = $http
    this.getMessages()
  }

  getMessages(){
    var vm = this

    this.$http.get('http://54.229.174.169:8080/api/message').then(function(result){
      vm.messages = result.data
    })
  }

  postMessage(){
    this.$http.post('http://54.229.174.169:8080/api/message', {msg:this.message})
    this.message = ''
  }
}
