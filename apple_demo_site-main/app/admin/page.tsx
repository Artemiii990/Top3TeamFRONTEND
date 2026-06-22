export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(4, 1fr)',
          gap: '24px',
          marginTop: '32px',
        }}
      >
        <div
          style={{
            background: '#fff',
            padding: '24px',
            borderRadius: '16px',
          }}
        >
          <h3>Products</h3>
          <p>124</p>
        </div>

        <div
          style={{
            background: '#fff',
            padding: '24px',
            borderRadius: '16px',
          }}
        >
          <h3>Users</h3>
          <p>46</p>
        </div>

        <div
          style={{
            background: '#fff',
            padding: '24px',
            borderRadius: '16px',
          }}
        >
          <h3>Orders</h3>
          <p>18</p>
        </div>

        <div
          style={{
            background: '#fff',
            padding: '24px',
            borderRadius: '16px',
          }}
        >
          <h3>Revenue</h3>
          <p>$12000</p>
        </div>
      </div>
    </>
  );
}