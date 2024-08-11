FROM node:18


COPY . .

RUN npm install -g pnpm



RUN pnpm install
RUN pnpm build


EXPOSE 4173

CMD [ "pnpm", "start" ]
