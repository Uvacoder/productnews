/**
 * PARSE RELATIVE TIME
 */
document.querySelectorAll('[data-relative-time]').forEach((e) => {
   const time = luxon.DateTime.fromISO(e.getAttribute('data-relative-time'));

   e.textContent = time.toRelative();
});
/** END **/
