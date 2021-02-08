export default function limitWords(textToLimit, wordLimit) {
  let finalText = "";
  let text2 = textToLimit.replace(/\s+/g, " ");
  let text3 = text2.split(" ");
  let numberOfWords = text3.length;
  let i = 0;
  if (numberOfWords > wordLimit) {
    for (i = 0; i < wordLimit; i++) finalText = finalText + " " + text3[i] + "";

    return finalText + "…";
  } else return textToLimit;
}
