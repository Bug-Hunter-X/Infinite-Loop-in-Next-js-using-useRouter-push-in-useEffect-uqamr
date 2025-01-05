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
export default function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    // This will cause an infinite loop because it re-renders the component,
    // triggering the useEffect hook again.
    router.push('/somewhere');
  }, []);

  return <p>This component uses useRouter.</p>;
}
```