This folder holds an example for DSGj Detached Signature. Step by step instructions for generating the signature is described here.

1. Prepare Payload content to be signed
1.1. Using the following bundle as example:  https://build.fhir.org/ig/HL7/fhir-ips/Bundle-IPS-examples-Bundle-01.json 
1.2. Base64-urlencode the payload as BASE64URL(UTF8( JWS Payload)) - see file 'encodedJWSPayload' in folder
1.3. Calculate base64-urlencoded digest value of the payload, use commands below - see file 'encodedDigestJWSPayload.txt' in folder, this value is used in the hashV member below in the Protected Header
    "openssl dgst -sha256 -sign keyrr -out C:/Users/rawlanir/AppData/Local/Programs/Git/mingw64/outpayload C:/Users/rawlanir/AppData/Local/Programs/Git/mingw64/encodedpayload"
    "openssl base64 -in C:/Users/rawlanir/AppData/Local/Programs/Git/mingw64/outpayload -out C:/Users/rawlanir/AppData/Local/Programs/Git/mingw64/payload.txt"
 
2. Create JWS Protected Header - see file 'jwsProtectedHeader.json'
2.1. Encode JWS Protected Header into Base64url as BASE64URL(UTF8(JWS Protected Header)) - see file 'encodedJWSProtectedHeader'

3. Prepare input for Signature Value Computation
3.1. Combining these as BASE64URL(UTF8(JWS Protected Header)) || '.' || BASE64URL(JWS Payload) - see file 'signing_input.txt'

4. Compute JWS Signature Value - see file 'encodedSignatureValue'
4.1. Create a self signed cert -  "openssl req -x509 -newkey rsa:4096 -keyout keyrr -out certrr.pem -sha256 -days 3650"
4.2. "openssl dgst -sha256 -sign keyrr -out C:/Users/rawlanir/AppData/Local/Programs/Git/mingw64/outfile.sha356 C:/Users/rawlanir/AppData/Local/Programs/Git/mingw64/signing_input.txt"
4.3. "openssl base64 -in C:/Users/rawlanir/AppData/Local/Programs/Git/mingw64/outfile.sha356 -out C:/Users/rawlanir/AppData/Local/Programs/Git/mingw64/encodedSignatureValue"

5. Create electronic timestamp based the base-64 encoded signature generated in the previous step as input - see file 'encodedTstToken.txt'
5.1. To create an electronic timestamp use the base-64 encoded signature generated in the previous step as input
5.2. Follow steps here: https://freetsa.org/index_en.php to create the tstToken as a ‘.tsr’ file and base 64 encode it

6. Create unprotected header that includes sigTst as timestamp token - see file 'jwsUnprotectedHeader.json'

7. The JWS JSON object can be put together - see file 'JWS.json'