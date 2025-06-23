
export default function Dashboard() {
  return (
    <div style={{ padding: 30, fontFamily: 'Arial' }}>
      <h1>Veigo Admin Paneli</h1>
      <div style={{ display: 'flex', gap: 20, marginTop: 30 }}>
        <div style={{ background: '#f5f5f5', padding: 20, borderRadius: 8 }}>
          <h3>Günlük Kazanç</h3>
          <p>€1.240</p>
        </div>
        <div style={{ background: '#f5f5f5', padding: 20, borderRadius: 8 }}>
          <h3>Aktif Şoför</h3>
          <p>34</p>
        </div>
        <div style={{ background: '#f5f5f5', padding: 20, borderRadius: 8 }}>
          <h3>Aktif Firma</h3>
          <p>12</p>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <h2>Son Yolculuklar</h2>
        <table style={{ width: '100%', marginTop: 10, borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Yolcu</th>
              <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Şoför</th>
              <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Tutar</th>
              <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Tarih</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ali K.</td>
              <td>Mehmet T.</td>
              <td>€24</td>
              <td>2025-06-23</td>
            </tr>
            <tr>
              <td>Ayşe Y.</td>
              <td>Ahmet G.</td>
              <td>€18</td>
              <td>2025-06-23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
