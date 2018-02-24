app.controller('officeController', $scope => {

  $scope.office = {
    title: 'The Office',
    employees: [
      {name: 'Pam', job: 'reception', lovebirds: true, salary: 43000}, 
      {name: 'Jim', job: 'sales', lovebirds: true, salary: 68500}, 
      {name: 'Michael', job: 'management', salary: 80000}, 
      {name: 'Dwight', job: 'sales', salary: 70000}, 
      {name: 'Oscar', job: 'accounting', salary: 52000}, 
      {name: 'Angela', job: 'accounting', salary: 49000}, 
      {name: 'Toby', job: 'HR', salary: 54000}, 
      {name: 'Creed', job: 'QA', salary: 51000}, 
      {name: 'Kelly', job: 'customer service', salary: 41000}, 
      {name: 'Ryan', job: 'temp', salary: 29000}
    ]
  }

  $scope.it = {
    title: 'The IT Crowd',
    employees: [
      {name: 'Moss', job: 'IT nerd', likes: 'Namco'}, 
      {name: 'Roy', job: 'IT nerd', likes: 'gaming consoles'}, 
      {name: 'Jen', job: 'IT relations manager', likes: 'shoes'}, 
      {name: 'Mr. Renham', job: 'ex-president', likes: 'teams'}, 
      {name: 'Douglas', job: 'president', likes: 'iPod parties'}, 
      {name: 'The German', job: 'guitarist?', likes: 'eating people'}
    ]
  }

  $scope.switchOffice = _ => {
    if ($scope.show === $scope.office) $scope.show = $scope.it;
    else $scope.show = $scope.office;
  }
  $scope.switchOffice();

});