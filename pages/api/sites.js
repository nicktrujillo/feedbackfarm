import db from "@/utils/firebase-admin";

export default async function handler(req, res) {
  const sitesRef = db.collection("sites");
  const snapshot = await sitesRef.get();
  let sites = [];

  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(sites);
}
