# Next.js Infinite Loop Bug

This repository demonstrates a common error in Next.js applications where an infinite loop occurs due to improper use of the `useRouter.push` method within a `useEffect` hook. The bug is caused by calling `router.push` inside the useEffect without specifying the dependencies array correctly which results in an infinite rendering loop.

## Bug Description:
The `MyComponent` uses the `useRouter` hook from Next.js to navigate to a different route. The issue arises when `router.push` is used inside the `useEffect` hook without an empty dependency array `[]`. This leads to an infinite loop because every render triggers the effect and calls `router.push`, which in turn causes another re-render and subsequent call to the function.