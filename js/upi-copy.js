const upi = "shuddhi.vidhya@upi";

function copyUpiId() {
  copyToClipboard();

  /* Alert the copied text */
  window.alert(upi + "\n\nUPI ID copied to clipboard!");
}

const copyToClipboard = () => {
  const el = document.createElement("textarea");
  el.value = upi;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
