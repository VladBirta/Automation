describe('eMag.ro', () => {

    it('should load', async () => {
       await browser.url('http://www.emag.ro');

       const searchBox = await $('#searchboxTrigger');
       const helpLink = await $('.navbar-aux-help-link');
       const firstButton = await $('/html/body/div[3]/div[1]/div/div[1]/ul/li[2]/a');
       
       helpLink.click();

    });

   it('should have the correct page title', async () => {
    await browser.url('https://www.emag.ro/');
    await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');

   });

   it('should have cart button', async () => {
    const cartButton = await $('#my_cart');
    await expect(cartButton).toBeDisplayed();
   })

   it('should open eMag Genius page', async () =>{
    const geniusButton = await $('[title="Genius"]');
    await geniusButton.click();
    await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');

   })

   it('search product', async () => {
    const searchBox = await $('#searchboxTrigger');
    const searchButton = await $('.searchbox-submit-button');

    await searchBox.setValue('Airpods');
    await searchButton.click();
    
    await expect(browser).toHaveTitle('Cauți Airpods? Alege din oferta eMAG.ro');
    
   })


});
