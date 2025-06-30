// https://og-playground.vercel.app
() => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#0f0f0f',
        fontSize: 32,
        fontWeight: 500,
        textAlign: 'center',
        fontFamily: 'SF Mono, Monaco, Cascadia Code, monospace',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(34, 34, 34, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 34, 34, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.3,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
          border: '1px solid #222',
          padding: '60px 80px',
          borderRadius: '8px',
          backgroundColor: 'rgba(15, 15, 15, 0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            color: '#888',
            fontSize: 18,
            marginBottom: 24,
            fontFamily: 'SF Mono, Monaco, Cascadia Code, monospace',
          }}
        >
          $ cat /dev/about
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 500,
            color: '#e8e8e8',
            marginBottom: 8,
            letterSpacing: '-1px',
          }}
        >
          Elias Benbourenane
        </div>

        <div
          style={{
            width: 180,
            height: 1,
            backgroundColor: '#ddd',
            marginBottom: 32,
          }}
        />

        <div
          style={{
            fontSize: 24,
            color: '#888',
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#ddd', marginRight: 8 }}>&gt;</span>
          Software Engineer
        </div>

        <div
          style={{
            fontSize: 20,
            color: '#555',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#888', marginRight: 8 }}>@</span>
          Pittsburgh
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 80,
          right: 120,
          width: 4,
          height: 4,
          backgroundColor: '#ddd',
          borderRadius: '50%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 100,
          left: 100,
          width: 3,
          height: 3,
          backgroundColor: '#555',
          borderRadius: '50%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 200,
          left: 80,
          width: 2,
          height: 2,
          backgroundColor: '#888',
          borderRadius: '50%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 16,
          color: '#555',
          fontFamily: 'SF Mono, Monaco, Cascadia Code, monospace',
        }}
      >
        elias.eu.org
      </div>
    </div>
  )
}  
