Certification network is a hyperledger fabric blockchain network which allows universities to issue and store certificates to its students.
Below are the functionalities of the network:
1. Universities can register a student in its database
2. University can issue certificates to registered students
3. Employers can verify the certificates of their candidates
4. Regulator of the network has full control of the network

Below are the organisations in this sample network
1. IIT - University which can register students and issue certificates
2. Aakash - Student of IIT (not an organisation)
3. Upgrad - Employer (company interested to employ Aakash)
4. MHRD - Regulatory authority of the network

Every organisation has 2 peers and the chaincode is installed in peer0 of each organisation.
There is only one orderer in the network
There is only one channel in the network
Every organisation has its own CA
The client side application is in the folder certification-network/application

How to start the network: 
1. Open terminal inside certification-network/network and enter: ./fabricNetwork.sh up
This will start the network, generate crypto-config files and docker container files

2. Now enter: ./fabricNetwork.sh install
This will install and instantiate the chaincode on peer0 of all organisation and instantitate on MHRD's peer. 

3. Now Open terminal inside the certification-network/application and enter: npm init 
4. Now enterL npm install

Now, before we start the localhost on port:3000, we need to make sure the identities of all the 
organisations are inside the folder ‘identities’ in the application directory.
Click on the 1_addToWallet.js file inside certification-network/application directory to open it.The function main()
has parameters signcerts and Keystore: main(path_to_signcert_file.pem, path_to_keystore_file_sk)
The file inside the Keystore changes every time the network is started, and that is why it is
important to follow this step.

5. Now enter: node .
This will start the node application on localhost:3000  

6. Finally open the index.html file inside certification-network/application/client directory to open the client application

Done.


