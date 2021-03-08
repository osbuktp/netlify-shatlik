import { useEffect } from "react";
import config from "./config";

const AdminPage = () => {
  useEffect(() => {
    // dynamicly loading netlify to ensure that window is present
    // (avoiding ssr)
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.init({ config });
    })();
  }, []);

  return null;
};
export default AdminPage;
