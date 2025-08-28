export const formatTime = (dateStr) => {
  const dateTime = dateStr.split("T");
  const time = dateTime[1].split(".")[0].split(":");

  return time[0] + ":" + time[1];
};

export const cutLongWords = (text) => {
  const words = text.split(" ");
  let cuttedText = "";

  words.forEach(
    (word) => {
      if (word.length >= 28) {
        for (let id = 0; id <= word.length; id += 28) {
          cuttedText += word.substring(id, id + 28) + " ";
        }
      } else {
        cuttedText += word + " ";
      }
    },
    [cuttedText]
  );
  return cuttedText;
};
