//***MODULES>>>> */

//***MODULES <<<<*/

//***VARAIABLES>>>> */
const LoyaltyAgreement1_endDate = new Date("2028-08-22T24:00:00.000Z");
const LoyaltyAgreement1_startDate = new Date("2013-08-22T24:00:00.000Z");
const LoyaltyAgreement1_plnAmount = 94541;
let LoyaltyAgreement1_plnRest = 0;
let time = new Date().getTime();
//***VARAIABLES <<<<*/

//***CORE>>>> */

setInterval(() => {
    const tDif=LoyaltyAgreement1_endDate-LoyaltyAgreement1_startDate;
    const dif = LoyaltyAgreement1_endDate - new Date().getTime();
    LoyaltyAgreement1_plnRest =`Ilość PLN do zwrotu: ${(dif/tDif)*LoyaltyAgreement1_plnAmount}`;
  console.log(LoyaltyAgreement1_plnRest);


}, 1000);
//***CORE<<<<*/

//***FUNCTIONS>>>> */
 //repetition time = 5 sec
