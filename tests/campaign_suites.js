module.exports = {
  'Open Kitabisa.com > select any campaign': function(client) {
    var home_page = client.page.home();    
    home_page.navigate();
    home_page.click('@urgent_campaign');
  },
  'Click Donasi Sekarang': function(client) {
    var campaign_page = client.page.campaign();    
    campaign_page.click('@btn_donasi_sekarang');
  },
  'Select amount as 10K ': function(client) {
    var donation_amount_page = client.page.donation_amount();    
    donation_amount_page.click_amount_donation("10.000");
  },
  'Click Payment option : BCA ': function(client) {
    var payment_options_page = client.page.payment_options();    
    payment_options_page.click_payment_option("BCA");
  },
  'Enter payment details > Click lanjutkan ': function(client) {
    var payment_details_page = client.page.payment_details();
    payment_details_page.setValue('@fullname_field', "nnd")
      .setValue('@username_field', "nnd_bln@mailinator.com")
      .click('@continue_payment');
  },
  'Close half banner > Click Kembali ke penggalangan': function(client) {
    var payment_summaries_page = client.page.payment_summaries();
    payment_summaries_page.section.half_banner.click('@close_banner');
    payment_summaries_page.click_button("KEMBALI KE PENGGALANGAN");
  },
  'Click left arrow': function(client) {
    var campaign_page = client.page.campaign();    
    campaign_page.click('@btn_left_arrow');
  }
}