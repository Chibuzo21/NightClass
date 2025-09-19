import Card from "./Props/Card";
import Child from "./Props/Child";
import Props from "./Props/props";
import Photo from "./assets/Emma.png";
export default function App() {
  // The parent component provides values as props for the child component
  return (
    <main className='flex flex-col justify-center items-center py-20 gap-5'>
      <Child name='Soma' age={45} />
      <Child name='Philip' age={60} />
      <Child name='Doku' age={30} />
      <section className='flex gap-4'>
        <Card>
          <p>Hello BRO</p>
          <p>Howfar</p>
        </Card>
        <Card>
          <img src='/Dennis.png' alt='' width={40} />
        </Card>
        <Card>
          <button className='bg-blue-600 px-2 py-2 text-white rounded'>
            Check out
          </button>
        </Card>
      </section>
      <section className='flex'>
        <Props
          image='/Samuel.png'
          title='Financial Literacy'
          text='Earn while you play! Score cash, crypto, exclusive tokens, achievement badges, and surprise rewards just for engaging with our platform.'
        />
        <Props
          image='/Dennis.png'
          text='Your gateway from Web2 to Web3! chi.ke seamlessly introduces traditional users to decentralized finance without the complexity.'
          title='Blockchain Wallets'
        />
        <Props
          image={Photo}
          title='AI Advisor'
          text='Meet your personal finance guru! Our cutting-edge AI advisor, powered by advanced RAG and RL technology, provides tailored guidance just for you'
        />{" "}
      </section>
    </main>
  );
}
