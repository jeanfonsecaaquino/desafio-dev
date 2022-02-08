import { render, screen } from '@testing-library/react';
import { Menu, Label, Modal, Table, UploadButton } from './components'

test('Deve montar menu', () => {

  const menuTest = [
    {
      label: "Item de menu teste",
      link: "#"
    }
  ]

  render(<Menu menu={menuTest} />);
  const linkElement = screen.getByText(/Item de menu teste/i);
  expect(linkElement).toBeInTheDocument();
});

test('Deve montar Label', () => {
  render(<Label>Label de teste</Label>);
  const linkElement = screen.getByText(/Label de teste/i);
  expect(linkElement).toBeInTheDocument();
});

test('Deve montar Modal', () => {
  render(<Modal display={true}>Modal de teste</Modal>);
  const linkElement = screen.getByText(/Modal de teste/i);
  expect(linkElement).toBeInTheDocument();
});

test('Deve montar Table', () => {

  const tableData = {
    loaded: true,
    headers: ["CPF", "DATA OCORRENCIA", "DONO LOJA", "HORA", "NOME LOJA", "TIPO TRANSACAO", "VALOR"],
    body: [
            { coluna: ["CPF TESTE", "OCORRENCIA TESTE", "DONO DA LOJA TESTE", "HORA TESTE", "NOME LOJA TESTE", "TIPO TRANSACAO TESTE", "VALOR TESTE"] }
    ],
    footer: ["Total", `R$ 0`],
}

  render(<Table tableData={tableData}>Modal de teste</Table>);
  const linkElement1 = screen.getByText(/CPF TESTE/i);
  const linkElement2 = screen.getByText(/OCORRENCIA TESTE/i);
  const linkElement3 = screen.getByText(/DONO DA LOJA TESTE/i);
  const linkElement4 = screen.getByText(/HORA TESTE/i);
  const linkElement5 = screen.getByText(/NOME LOJA TESTE/i);
  const linkElement6 = screen.getByText(/TIPO TRANSACAO TESTE/i);
  const linkElement7 = screen.getByText(/TIPO TRANSACAO TESTE/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
  expect(linkElement5).toBeInTheDocument();
  expect(linkElement6).toBeInTheDocument();
  expect(linkElement7).toBeInTheDocument();
});

test('Deve montar Upload Button', () => {
  render(<UploadButton handleFileInput={()=>{}}/>);
  const linkElement = screen.getByText(/Selecione um arquivo/i);
  expect(linkElement).toBeInTheDocument();
})