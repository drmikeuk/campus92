jQuery(document).ready(function ($) {
  // Javascript to enable link to tab
  const queryString  = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let selectedTab = urlParams.get('tab');
  console.log("selected tab " + selectedTab)
  if (urlParams.has('tab')) {
   $('.nav-link[href="'+'#'+selectedTab+'"]' ).trigger('click');
  }
})
