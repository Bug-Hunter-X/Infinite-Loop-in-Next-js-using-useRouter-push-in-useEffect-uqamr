```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MyComponent() {
  const router = useRouter();
  useEffect(() => {
    // This will execute only once on mount
    router.push('/somewhere');
  }, []);
  return <p>This component uses useRouter.</p>;
}
```