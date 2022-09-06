import BasePage from "../BasePage";

export default class HomePage extends BasePage{

    static LoadHomePage(){
        cy.visit('https://birthday.dev/')
    }

    static VerifyHeader(){
        cy.get('*[class^="relative cursor-pointer w-[100px] h-[52px] sm:w-[150px] sm:h-[78px]"]').should("have.text",'')
    }
    static VerifyFooter(){
        cy.get('*[class^="text-dark-200 w-[64%] font-medium sm:text-2xl sm:w-6/12 lg:w-5/12 2xl:w-4/12"]').should("have.text","We strive to develop best-in-class blockchain innovations")
    }

    static VerifyCTA(){

    }
}