# Reiterate.so

## Installation

```bash
yarn add @reiterate/react

or

npm add @reiterate/react

```

## Usage

```tsx
const YourComponent = ({ userId }: { userId: string }) => {
  const [text, setText] = useState('')
  const { create } = useFeedback({ userId })

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={create(text)}>Feedback</button>
    </>
  )
}
```
