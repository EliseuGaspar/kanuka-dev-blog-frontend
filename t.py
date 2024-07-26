from flask import Flask

app = Flask(
    __name__,
    template_folder = 'caminho_da_tua_pasta_templates',
    static_folder = 'caminho_da_tua_pasta_statics'
)