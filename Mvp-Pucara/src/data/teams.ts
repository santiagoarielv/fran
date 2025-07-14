export interface Player {
  nombre: string;
  edad: number;
  nacionalidad: string;
  rol: string;
  instagram: string;
  imagen: string;
}

export interface Team {
  id: string;
  nombre: string;
  emoji: string;
  bgClass: string;
  descripcion: string;
  imagen: string;
  players: Player[];
}

export const teamsData: Record<string, Team> = {
  "dota-2": {
    id: "dota-2",
    nombre: "DOTA 2",
    emoji: "🛡️",
    bgClass: "bg-gradient-to-br from-dark to-gray-900/80",
    descripcion: "Nuestro equipo de DOTA 2 compite en los torneos más importantes de Argentina y Latinoamérica.",
    imagen: "/D2banner.png",
    players: [
      { 
        nombre: "Jugador 1", 
        edad: 24, 
        nacionalidad: "🇦🇷 Argentina", 
        rol: "Carry", 
        instagram: "jugador1", 
        imagen: "https://via.placeholder.com/300x300/2d2d2d/ea601a?text=Jugador+1" 
      },
      { 
        nombre: "Jugador 2", 
        edad: 26, 
        nacionalidad: "🇦🇷 Argentina", 
        rol: "Support", 
        instagram: "jugador2", 
        imagen: "https://via.placeholder.com/300x300/2d2d2d/ea601a?text=Jugador+2" 
      },
      { 
        nombre: "Jugador 3", 
        edad: 22, 
        nacionalidad: "🇺🇾 Uruguay", 
        rol: "Mid", 
        instagram: "jugador3", 
        imagen: "https://via.placeholder.com/300x300/2d2d2d/ea601a?text=Jugador+3" 
      },
      { 
        nombre: "Jugador 4", 
        edad: 25, 
        nacionalidad: "🇦🇷 Argentina", 
        rol: "Offlane", 
        instagram: "jugador4", 
        imagen: "https://via.placeholder.com/300x300/2d2d2d/ea601a?text=Jugador+4" 
      },
      { 
        nombre: "Jugador 5", 
        edad: 23, 
        nacionalidad: "🇦🇷 Argentina", 
        rol: "Support", 
        instagram: "jugador5", 
        imagen: "https://via.placeholder.com/300x300/2d2d2d/ea601a?text=Jugador+5" 
      },
    ],
  },
  "street-fighter": {
    id: "street-fighter",
    nombre: "STREET FIGHTER",
    emoji: "👊",
    bgClass: "bg-gradient-to-br from-gray-900/80 to-gray-800/90",
    descripcion: "Nuestro especialista en Street Fighter compite en torneos presenciales y online representando a Pucará Gaming.",
    imagen: "/SFbanner.png",
    players: [
      { 
        nombre: "Jugador Pro", 
        edad: 28, 
        nacionalidad: "🇦🇷 Argentina", 
        rol: "Fighter", 
        instagram: "jugadorpro", 
        imagen: "https://via.placeholder.com/300x300/2d2d2d/ea601a?text=Jugador+Pro" 
      },
    ],
  },
  "fifa": {
    id: "fifa",
    nombre: "FIFA",
    emoji: "⚽",
    bgClass: "bg-gradient-to-br from-dark to-gray-900/80",
    descripcion: "Nuestro jugador de FIFA compite en las ligas más competitivas del fútbol virtual argentino.",
    imagen: "/FC25banner.png",
    players: [
      { 
        nombre: "Jugador FIFA", 
        edad: 21, 
        nacionalidad: "🇦🇷 Argentina", 
        rol: "Pro Player", 
        instagram: "jugadorfifa", 
        imagen: "https://via.placeholder.com/300x300/2d2d2d/ea601a?text=Jugador+FIFA" 
      },
    ],
  },
};

// Utility function para obtener todos los equipos como array
export const getAllTeams = (): Team[] => {
  return Object.values(teamsData);
};

// Utility function para obtener un equipo específico
export const getTeamById = (id: string): Team | undefined => {
  return teamsData[id];
};

// Utility function para obtener las rutas estáticas
export const getTeamStaticPaths = () => {
  return Object.keys(teamsData).map(teamId => ({
    params: { team: teamId }
  }));
};
