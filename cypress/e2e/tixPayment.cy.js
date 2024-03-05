import * as objects from "./objects/pagePayment.js"
require('cypress-xpath');

describe("payment tix", () =>{
    beforeEach(()=>{
        cy.visit("https://newstaging.kiostix.com/e/sepak-terjang")
    })
    it("successfull payment", () => {
        cy.get(objects.input_visitDate).type("29/12/2023")
        cy.get(objects.input_time).click()
        cy.get(objects.input_qty).type("5").type('{enter}')
        cy.get(objects.add_qty).click()
        cy.get(objects.button_pesanSekarang).click()
        cy.get(objects.input_firstName).type("adib")
        cy.get(objects.input_email).type("adib.kurniawan@kios.io")
        cy.get(objects.input_emailConfirm).type("adib.kurniawan@kios.io")
        cy.get(objects.input_phoneNumber).type("0987867")
        cy.get(objects.input_gender).click()
        cy.get(objects.input_genderMale).click()
        cy.get(objects.input_province).type('Bengkulu{enter}')
        cy.get(objects.input_birthdate).type('19/09/1998')
        cy.get(objects.input_ktp).type('no0morKtp3')
        cy.get(objects.tnc).click()
        cy.get(objects.modal_confirm).click()
        cy.get(objects.button_pesanSekarangForm).click()
        cy.wait(6000)
        cy.get(objects.cc).click()
        cy.get(objects.cc_name).type('adib kurniawan')
        cy.get(objects.cc_number).type('4811 1111 1111 1114')
        cy.get(objects.cc_month).select('12')
        cy.get(objects.cc_year).select('2028')
        cy.get(objects.cc_cvv).type('123')
        cy.get(objects.cc_paybtn).click()
        cy.wait(4000)

        const getIframeDocument = () => {
            return cy
            .get('iframe')
            .its('0.contentDocument').should('exist')
          }
          
          const getIframeBody = () => {
            return getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
          }
          
          it('gets the post', () => {
            cy.visit('index.html')
            getIframeBody().find('otp').click().type('112233')
            getIframeBody().find('#acsForm > div:nth-child(7) > div > button.btn.btn-sm.btn-success').click()
          })

        
        
    })
})