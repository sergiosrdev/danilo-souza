import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SpecialtiesPage from "./pages/SpecialtiesPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import ArticlesPage from "./pages/ArticlesPage";
import ApproachPage from "./pages/ApproachPage";
import FaqPage from "./pages/FaqPage";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil-profissional" element={<ProfilePage />} />
        <Route path="/especialidades" element={<SpecialtiesPage />} />
        <Route path="/abordagem" element={<ApproachPage />} />
        <Route path="/artigos" element={<ArticlesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/enderecos" element={<LocationsPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}
