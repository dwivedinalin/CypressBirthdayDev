import HomePage from "../../pageobjects/pages/HomePage.js";

describe('HomePage load test',()=>{
    before(function (){
        HomePage.LoadHomePage()
    })


    it('Should Open Birthday Page and verify homepage elements', () => {
        HomePage.VerifyHeader()
    })



    it('Should verify the main text - The Blockchain Research ', function () {
        HomePage.VerifyFooter()
    });
})