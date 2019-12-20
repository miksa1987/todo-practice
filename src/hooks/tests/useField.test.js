import { renderHook, act } from '@testing-library/react-hooks'
import useField from '../useField'

const getReturnsFromHook = () => {
  const { result } = renderHook(() => useField('text'))
  const [ field, setField ] = result.current

  return [ field, setField ]
}

describe('useField', () => {
  test('value is returned correctly', () => {
    const [ field, setField ] = getReturnsFromHook()

    expect(field.value).toBe('')
  })

  test('type is returned correctly', () => {
    const [ field, setField ] = getReturnsFromHook()

    expect(field.type).toBe('text')
  })

  test('onChange is returned correctly and works', () => {
    const [ field, setField ] = getReturnsFromHook()

    act(() => {
      field.onChange({ target: { value: 'test' } })
    })

    setTimeout(() => {
      expect(field.value).toBe('test')
    }, 50)
  })

  test('setValue is returned correctly and works', () => {
    const [ field, setField ] = getReturnsFromHook()

    act(() => {
      setField('test')
    })

    setTimeout(() => {
      expect(field.value).toBe('test')
    }, 50)
  })
})