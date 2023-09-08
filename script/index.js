const connection = require("../connection");

function intMountToString_ru(mount) {
  switch (mount) {
    case 0:
      return "Января";
    case 1:
      return "Февраля";
    case 2:
      return "Марта";
    case 3:
      return "Апреля";
    case 4:
      return "Мая";
    case 5:
      return "Июня";
    case 6:
      return "Июля";
    case 7:
      return "Августа";
    case 8:
      return "Сентября";
    case 9:
      return "Октября";
    case 10:
      return "Ноября";
    case 11:
      return "Декабря";

    default:
      console.error("invalid int mount");
  }
}

function imgMessageFromDB(json) {
  if (json) {
    return json.split(",")[0].split(":")[1].slice(1, -1);
  }
  return json;
}

function dataTranslation(milisecunds) {
  let data = new Date(milisecunds);
  let month = intMountToString_ru(data.getMonth());
  return data.getDate() + " " + month + " " + data.getFullYear();
}

function loadData(sql) {
  return new Promise((resolve, reject) => {
    connection.invokeQuery(sql, (rows) => {
      resolve(rows);
    });
  });
}

module.exports = {
  intMountToString_ru,
  imgMessageFromDB,
  dataTranslation,
  loadData,
};
