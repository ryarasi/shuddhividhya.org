const upi = "shuddhi.vidhya@upi";

function openUpiModal() {
  copyToClipboard();
  document.querySelector(".bg-modal").style.display = "flex";
}

function closeUpiModal() {
  document.querySelector(".bg-modal").style.display = "none";
}

const copyToClipboard = () => {
  const el = document.createElement("textarea");
  el.value = upi;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
