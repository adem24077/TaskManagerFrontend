import "./App.css";

function App() {
  return (
    <Provider store={store}>
      {/* <OverlayLoader /> */}
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </Router>
    </Provider>
  );
}

export default App;
