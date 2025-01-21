import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const items = [
    "Japan",
    "Indonesian",
    "Australia",
    "Saudi Arabia",
    "Bahrain",
    "Chinesse",
  ];
  const itemss = [
    "Hiroshima",
    "Bandung",
    "Sydney",
    "Mekkah",
    "Manama",
    "Beijing",
  ];

  const [alertVisible, setAlertVisible] = useState(false);
  const handleClick = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  // State untuk menyimpan pilihan negara dan kota
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Handler untuk memilih negara
  const handleSelectCountry = (item: string) => {
    setSelectedCountry(item);  // Set negara yang dipilih
  };

  // Handler untuk memilih kota
  const handleSelectCity = (item: string) => {
    setSelectedCity(item);  // Set kota yang dipilih
  };

  return (
    <div>
      {/* Static Alert Example */}
      <Alert onClose={() => {}}>
        You <span>Lose!</span>
      </Alert>

      {/* Flex container untuk tombol */}
      <div style={styles.buttonContainer}>
        <Button color="danger" onClick={handleClick}>
          Touch Me
        </Button>
      </div>

      {/* Alert Komponen */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Wlee😝</Alert>
      )}

      {/* Flex Container untuk Negara dan Kota */}
      <div style={styles.contentContainer}>
        {/* Kolom Negara */}
        <div style={{ textAlign: "center" }}>
          <h2>Country</h2>
          <ListGroup
            items={items}
            heading=""
            onSelectItem={handleSelectCountry}
          />
          {/* Tampilkan negara yang dipilih */}
          {selectedCountry && (
            <p>
              You Choice <span style={{ fontWeight: "bold" }}>{selectedCountry}</span>
            </p>
          )}
        </div>

        {/* Kolom Kota */}
        <div style={{ textAlign: "center" }}>
          <h2>City</h2>
          <ListGroup
            items={itemss}
            heading=""
            onSelectItem={handleSelectCity}
          />
          {/* Tampilkan kota yang dipilih */}
          {selectedCity && (
            <p>
              You Choice <span style={{ fontWeight: "bold" }}>{selectedCity}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Styles untuk Flexbox container
const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "center",  // Center secara horizontal
    alignItems: "center",      // Center secara vertikal
    marginTop: "20px",         // Memberikan jarak sedikit antara tombol dan konten di bawahnya
  },
  contentContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",  // Menyusun kolom negara dan kota secara horizontal
    marginTop: "20px",         // Memberikan jarak sedikit antara tombol dan konten negara/kota
  }
};

export default App;
