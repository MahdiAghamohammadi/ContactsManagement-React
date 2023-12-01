export function convertVCFToJson(vcfContent) {
  const contacts = [];
  let currentContact = {};

  vcfContent.split("\n").forEach((line) => {
    if (line.startsWith("BEGIN:VCARD")) {
      currentContact = {};
    } else if (line.startsWith("END:VCARD")) {
      contacts.push(currentContact);
    } else if (line.includes(":")) {
      const parts = line.split(":");
      const key = parts[0];
      const value = parts[1] || "";
      const isUtf8 = key.includes("CHARSET=UTF-8");
      if (isUtf8) {
        currentContact[key] = quotedPrintableDecode(value);
      } else {
        currentContact[key] = value;
      }
    }
  });

  return contacts.map((contact) => {
    let mobile =
      contact["TEL;CELL;PREF"]?.trim().split("\r\n")[0] ||
      contact["TEL;CELL"]?.trim().split("\r\n")[0];

    return {
      fullname: contact["FN"]?.trim(),
      mobile: mobile.replace(/-/g, "").replace(/^\+98/, "0"),
      photo: "/images/avatar.png",
      email: "",
      job: "",
      group: "",
    };
  });
}

export function quotedPrintableDecode(str) {
  const percentEncodedStr = str.replace(/=([0-9A-F]{2})/g, "%$1");
  try {
    return decodeURIComponent(percentEncodedStr);
  } catch (e) {
    console.error("Error in UTF-8 decoding: ", e);
    return "";
  }
}
