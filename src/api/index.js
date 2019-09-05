function mockApi(payload) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(payload)
    }, 0)
  })
}

const MOCK_FETCH_MAIN = {
  user: {
    token: 'poooooooooooo',
    name: 'pnly'
  },
  mylist: {
    alpha: [{ id: '1', name: 'hello' }, { id: '2', name: 'world' }],
    bravo: [{ id: '3', name: 'macaron' }, { id: '4', name: 'muffin' }]
  }
}

export function fetchMain() {
  // テスト用
  return mockApi(MOCK_FETCH_MAIN)
}
