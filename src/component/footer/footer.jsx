export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <p className="footer-item-text-md">Head Office</p>
        <p className="footer-item-text-sm">
          4th and 5th Floors, Alexander House Plot 8, Otunba Jobi Fele Way
          Alausa Central Business District Ikeja, Lagos
        </p>
      </div>
      <div className="footer-item">
        <p className="footer-item-text-md">Abuja Liaison Office</p>
        <p className="footer-item-text-sm">
          No. 3 Aguleri Street
          <br /> Area 11, Central Business
          <br /> District Garki <br />
          FCT, Abuja
        </p>
      </div>
      <div className="footer-item">
        <p className="footer-item-text-md">Registration Contacts</p>
        <div className="footer-item-text-info">
          <p className="footer-item-text-sm">
            <span style={{ fontWeight: 500 }}>Phone:</span>
            <br />
            (234) 0908-899-9819
          </p>
          <p className="footer-item-text-sm">
            <span style={{ fontWeight: 500 }}>Email:</span>
            <br />
            enquiries@financialreportingcouncil.gov.ng
          </p>
        </div>
      </div>
    </div>
  );
}
