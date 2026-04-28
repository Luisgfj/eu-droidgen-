const express = require('express');
const cors = require('cors');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para gerar o código do App
app.post('/api/gerar', async (req, res) => {
    const { nome, descricao } = req.body;

    try {
        // Aqui o servidor vai conversar com o Gemini no futuro
        console.log(`Solicitação para o app: ${nome}`);
        
        res.json({
            sucesso: true,
            mensagem: "Conectado ao servidor Render!",
            logs: "> Analisando sua descrição...\n> Preparando estrutura do APK..."
        });
    } catch (error) {
        res.status(500).json({ sucesso: false, erro: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor DroidGen ativo na porta ${PORT}`);
});

