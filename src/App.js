import React from 'react'
import './App.css';
import './styles.css'
function App() {
  return (
    <div className="App">
      <div  className='dingo'>
            <header>
           <span> EDYODA
            </span>
            <span className="expand">
           Explore categories: <select name="explore categories">
                <option>artificial intelligence</option>
                <option>cloud computing</option>
                <option>devops</option>
                <option>programming language</option>
                <option>mobile development</option>
                <option>technology and tools</option>
                <option>others</option>
            </select></span>
            <span>edyoda is a free learning platform</span>
            <a href="https://www.edyoda.com">GO TO WEBSITE</a><br/>
            <span>stories</span><br/>
            
            </header>
        </div>
        
        <h2>Filter:</h2>  <button>all</button><button id="btn1">Artificial-Intelligence</button><button id="btn2">Cloud computing</button><button id="btn3">Devops</button>
        <button id="btn4">programming-language</button><button id="btn5">mobile application development</button>
        <button id="btn6">Technology and tools</button><button id="btn7">Get a job in a tech company</button><button id="btn8">OTHERS</button><br/>
         <div className="FIRST-CARD">
             <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/seven_reasons_to_learn_python_sW8FK0o.jpg"width="200"height="200" alt=''/>
             <h2>Fresh graduate or IT Professional looking for job?-7 Reason to learn python now</h2>
             <h4>Arman Ahmed</h4>
             <p>
                f you are a fresh graduate - or new to IT - looking for the next job, you need to read this.

                The last couple of years zekeLabs gave me a unique opportunity to assess technology demand in the industry and also to evaluate available talent pool for the demand.
                
                Our consulting and technology training assignments for our corporate partners enlightened us on the technology skill in demand. We discovered - What, Where and which technologies are increasingly being adopted by the Industry.
                
                Our interaction with the engineering graduates and IT professionals during the technology workshops, seminars and our technology skilling initiatives, We found out the current tech skill-sets of the millennial generation and the skill gap.
             </p>
         </div>
         <div className="FIRST-CARD">
             <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/cyber-security-analysis-of-digital-world_m81m18d.jpg"width="200"height="200" alt=''/>
             <h2>Cyber Security:Analysis of Digital World</h2>
             <h4>Edyoda</h4>
             <p>
                When computers were standalone devices, security was a minimal concern. Mainframes had their own protected facilities. Slowly and steadily as computing became more personal, security became the personal responsibility too. The use of computers increasingly involves networks of computers for messaging, on-line transactions, remote hosting. It started including the opportunities for the attack which have multiplied exponentially. Arriving at the security part became a major concern to drive out businesses well and generate revenues without leading to the losses due to the breach of security
             </p>
         </div>
         <div className="FIRST-CARD">
             <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/5_9jUbbUb.png"width="200"height="200" alt=''/>
             <h2>Breaking The Myth Around Cyber Security</h2>
             <h4>Edyoda</h4>
             <p>
                As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising even after adopting every security measure possible by businesses. Cyber attackers are developing advancing technologies that are continuing to cause more damage. There are many methods through which a cyber attack is committed like software vulnerabilities, user interaction (using malicious links, email attachments) and use of stolen credentials logins, encryption keys.

                Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in front of advanced cyber attacking programs. There are some vulnerabilities that you are not aware of. Most of the organizations believe in cybersecurity myths that are the major reason for growing threats and attacks.
             </p>
         </div>
         <div className="FIRST-CARD">
             <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1_uTlUxq8.png"width="200"height="200" alt=''/>
             <h2>Practical Machine Learning With Python And Keras</h2>
             <h4>Danial Pyrathon</h4>
             <p>
                What is machine learning, and why do we care?

                Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively improve performance on a specific task) from data, without being explicitly programmed. Think of how efficiently (or not) Gmail detects spam emails, or how good text-to-speech has become with the rise of Siri, Alexa, and Google Home.
                
                Some of the tasks that can be solved by implementing Machine Learning include:
                
                Anomaly and fraud detection: Detect unusual patterns in credit card and bank transactions.
                Prediction: Predict future prices of stocks, exchange rates, and now cryptocurrencies.
                Image recognition: Identify objects and faces in images.
                Machine Learning is an enormous field, and today we’ll be working to analyze just a small subset of it.
                
                Supervised Machine Learning
                
                Supervised learning is one of Machine Learning’s subfields. The idea behind Supervised Learning is that you first teach a system to understand your past data by providing many examples to a specific problem and desired output. Then, once the system is “trained” , you can show it new inputs in order to predict the outputs.
                
                How would you build an email spam detector? One way to do it is through intuition – manually defining rules that make sense: such as “contains the word money”, or “contains the word ‘Western Union’”. While manually built rule-based systems can work sometimes, others it becomes hard to create or identify patterns and rules based only on human intuition. By using Supervised Learning, we can train systems to learn the underlying rules and patterns automatically with a lot of past spam data. Once our spam detector is trained, we can feed it new a new email so that it can predict how likely an email is a spam.
                
                Earlier I mentioned that you can use Supervised Learning to predict an output. There are two primary kinds of supervised learning problems: regression and classification.
             </p>
         </div>
         <div className="FIRST-CARD">
             <img className="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/4_eSRlqfD.png"width="200"height="200" alt=''/>
             <h2>Impact of cloud computing in various industries.</h2>
             <h4>Edyoda</h4>
             <p>
                Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business. Every industry has its own technology dynamics designed to suit its infrastructure. To understand the future of cloud computing, one needs to understand the dynamics of cloud computing in various key industries. According to the reports by Dell companies that invest in Big Data, cloud, mobility and security enjoy up to 53% faster revenue growth than their competitors. As it is becoming more and more difficult to keep all the information, programs, and systems up and running on in-house computer servers, it has become necessary to store data on the cloud.

                Here, we will discuss the impact of Cloud Computing in various sectors: 
                
                The Banking Sector
                
                The Indian Banking sector has been on a rise with economic growth and is boosting. Innovation and implementation of technology have created a major awareness in the sector. Banks like HDFC, ICICI and AXIS have started to provide services like transactions without swiping the use of credit/debit card with Near Field Communication (NFC). The risks of a security breach in the private clouds have been minimized as used within the firewall of the organization. Banks have started to process customer requests and high transaction volumes faster and without overloading the network. One of the main cloud systems for banking is the eNlight cloud for banking.
             </p>
         </div>
         <div className="FIRST-CARD">
             <img className="img"src="https://edyoda.s3.amazonaws.com/media/blog-images/Mean_Stack_vs_LAMP_stack.png"width="200"height="200" alt=''/>
             <h2>LAMP stack vs MEAN stack:choosing the right platform for web application development</h2>
             <h4>Edyoda</h4>
             <p>
                In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations around the world that intensely depend on programming for their everyday business operations, the big business level applications, sites and servers have become apparent. It is important to use consistent, scalable and standardized software when developing a new application.

                A web stack is a collection of software that is used to build a web application. Many E-commerce platforms like Amazon, Walmart and eBay provide the best user experience which is one of the reasons why they maintain their position at the top. Currently, the most popular web stacks are: LAMP stack and MEAN stack.
                
                Let us try to understand more about these web application development platforms.
                
                What is LAMP?
                
                LAMP is a set of software subsystems combined to perform tasks without being dependent on any external software or data. LAMP is a combination of four software programs which allow a smooth and continuous integration with each other. LAMP is the most reliable and highly effective platform to develo
             </p>
         </div>
    </div>
  );
}

export default App;
