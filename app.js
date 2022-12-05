//***MODULES>>>> */

//***MODULES <<<<*/

//***VARAIABLES>>>> */
const LoyaltyAgreement1_endDate = new Date("2028-08-22T24:00:00.000Z");
const LoyaltyAgreement1_startDate = new Date("2018-08-22T24:00:00.000Z");

const LoyaltyAgreement2_endDate = new Date("2025-12-18T24:00:00.000Z");
const LoyaltyAgreement2_startDate = new Date("2020-12-18T24:00:00.000Z");

const LoyaltyAgreement1_plnAmount = 94541;
const LoyaltyAgreement2_plnAmount = 185864;
let LoyaltyAgreement1_plnRest = 0;
let timee = new Date().getTime();
//***VARAIABLES <<<<*/

//***CORE>>>> */

setInterval(() => {
    const tDif1=LoyaltyAgreement1_endDate-LoyaltyAgreement1_startDate;
    const dif1 = LoyaltyAgreement1_endDate - time();

    const tDif2 = LoyaltyAgreement2_endDate - LoyaltyAgreement2_startDate;
    const dif2 = LoyaltyAgreement2_endDate - time();

    LoyaltyAgreement1_plnRest =`Ilość PLN do zwrotu: ${((dif1/tDif1)*LoyaltyAgreement1_plnAmount+((dif2/tDif2)*LoyaltyAgreement2_plnAmount))}`;
  console.log(LoyaltyAgreement1_plnRest);


}, 4000);
//***CORE<<<<*/

//***FUNCTIONS>>>> */
function time(){
  return new Date().getTime();
}
 //repetition time = 5 sec
