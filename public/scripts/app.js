'use strict';

const bankApp = {
  loggedIn: false,
  customerid: "",
  firstname: "",
  loginDialog: document.getElementById('loginContainer'),
  selectedLocations: {},
};

function checkLogin() {
  while(!bankApp.loggedIn) {
    //$('#loginModal').modal('show');
  }
}

function login() {
  toggleLoginDialog();
  const customerid = document.getElementById("customerid").value;
  const firstname = document.getElementById("firstname").value;
  
}

function toggleLoginDialog() {
  bankApp.loginDialog.classList.toggle('visible');
}

function loadAccountList() {
  let accounts = localStorage.getItem('../account_data.json');
  if (accounts) {
    try {
      accounts = JSON.parse(accounts);
    } catch (ex) {
      accounts = {};
    }
  }
  if (!accounts || Object.keys(accounts).length === 0) {
    const key = '0';
    accounts = {};
    accounts[key] = { "accountNumber": "0077693588", "customerId": "00000073918714", "firstName": "John", "middleName": "", "lastName": "Smith", "taxId": 411111080, "dob": 19701010, "homeAddress": "3456 W RoadRunner Drive", "aptNum": "", "city": "San Diego", "state": "CA", "zip": 92123, "phone": 9023456767, "expectedCreditLimit": 20000, "ficoScore": 820, "customScore": 588, "accountType": "I", "openedDate": "10-Mar-18", "productCode": "072IM", "balanceAvailable": -0.9, "branchCode": "00183", "minBalance": -0.9};
  }
  return accounts;
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function init() {
  $('#loginModal').modal({ show: false});
  //checkLogin();
  bankApp.selectedAccounts = loadAccountList();
}

init();
