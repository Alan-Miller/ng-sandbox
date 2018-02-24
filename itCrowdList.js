<div class="list">
  <input placeholder="Filter items" ng-model="officeList" />

  <ul>
    <li ng-repeat="employee in office | filter: {name: officeList}" 
        ng-class="{'lovebirds': employee.lovebirds}">
      <span class="scope-info">{{ employee.name }}</span>
      <span style="font-style:italic">works in</span> 
      <span class="scope-info" ng-class="{'big-money': employee.salary > 55000}">
        {{ employee.job }}
      </span>
    </li>
  </ul>

</div>