import styled from "styled-components";
import { Button, Typography, Card, Container } from "@mui/material";

// Контейнер для компонента
export const StyledContainer = styled(Container)`
  padding: 50px;
`;

// Основной заголовок
export const MainTitle = styled(Typography)`
  font-family: "Inter";
  font-size: 48px;
  text-align: center;
`;

// Карточка продукта
export const ProductCard = styled(Card)`
  padding: 36px;
  border: none;
  box-shadow: none;
`;

// Заголовок внутри карточки
export const CardTitle = styled(Typography)`
  font-weight: bold;
`;

// Подзаголовок внутри карточки
export const CardSubtitle = styled(Typography)`
  color: black;
  font-weight: bold;
  font-family: "Inter";
`;

// Контейнер для кнопки
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

// Стили для кнопки
export const StyledButton = styled(Button)`
  padding: 8px 40px;
  border-radius: 12px;
  color: #fff;
  background-color: #000;
  font-family: "Inter";
  text-decoration: none;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;
