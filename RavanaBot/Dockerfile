FROM quay.io/lyfe00011/bot:beta

RUN git clone https://github.com/agentmax123/rnrp.git /root/slRavana
WORKDIR /root/slRavana/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "index.js"]
